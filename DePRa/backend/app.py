from flask import Flask, request
from flask_migrate import Migrate
from sqlalchemy.orm import sessionmaker
from models import db, User, Survey, Contact, get_or_create_table
from flask_cors import CORS
from config import Config
from flask import jsonify
from flask_login import current_user, login_required, login_user
from flask_login import LoginManager
from flask import make_response


app = Flask(__name__)
# 初始化扩展
app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)
CORS(app, supports_credentials=True)

# Flask-Login 初始化
login_manager = LoginManager()
login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_id):
    return db.session.get(User, user_id)  # 根据用户 ID 加载用户


@login_manager.unauthorized_handler
def unauthorized():
    return jsonify({
        "data": {
            "isLogin": False
        },
        "errorCode": "401",
        "errorMessage": "Please log in！",
        "success": False
    }), 401

# 路由：登录
@app.route('/api/login/account', methods=['POST'])
def login():
    data = request.json  # 获取前端提交的数据
    username = data.get('username')
    password = data.get('password')

    print(f"收到的用户名: {username}, 密码: {password}")  # 打印接收到的数据，便于调试
    # 根据用户名查询用户
    user = User.query.filter_by(username=username).first()

    if user is None:
        # 如果用户不存在，创建新用户并完成登录
        print(f"用户 {username} 不存在，正在创建新用户")
        new_user = User(username=username)  # 创建新用户
        new_user.set_password(password)  # 设置用户密码的哈希值
        db.session.add(new_user)  # 添加到数据库会话
        db.session.commit()  # 提交到数据库
        login_user(new_user)  # 完成登录
        response_data = {"status": 'ok', "message": "新用户创建并登录成功"}
        response = make_response(jsonify(response_data), 200)
        response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"
        return response

    # 如果用户存在，验证密码
    if not user.check_password(password):
        print(f"用户 {username} 的密码错误")
        response_data = {"status": 'wrong', "message": "密码错误"}
        response = make_response(jsonify(response_data), 400)
        response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"
        return response

    # 如果密码正确，完成登录
    print(f"用户 {username} 登录成功")
    login_user(user)
    response_data = {"status": 'ok', "message": "登录成功"}
    response = make_response(jsonify(response_data), 200)
    response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    return response


# 路由：获取当前用户信息
@app.route('/api/currentUser', methods=['GET'])
@login_required
def current_user_info():
    return jsonify({
        "success": True,
        "data": {
            "name": current_user.username,
            "userid": current_user.id,
        }
    })

@app.route('/api/current_user', methods=['GET'])
@login_required  # 确保只有登录用户才能访问这个接口
def get_current_user():
    if current_user.is_authenticated:
        # 返回当前用户的信息
        return jsonify({
            "username": current_user.username,
        })
    else:
        # 如果用户未登录
        return jsonify({"error": "User not authenticated"}), 401


@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.json  # 获取前端提交的数据
    print(f"接收到的数据: {data}")
    try:
        name=data.get('name')
        email=data.get('email')
        message=data.get('message')

        contact = Contact(
            name=name,
            email=email,
            message=message
        )
        db.session.add(contact)  # 添加到会话
        db.session.commit()  # 提交事务

        return jsonify({"success": True, "message": "问卷提交成功"}), 200
    except Exception as e:
        db.session.rollback()  # 如果出错，回滚事务
        print(f"数据库错误: {e}")
        return jsonify({"success": False, "message": "服务器错误"}), 500


@app.route('/api/submit_survey', methods=['POST'])
def submit_survey():
    data = request.json  # 获取前端提交的数据
    print(f"接收到的数据: {data}")

    try:
        # 获取前端传递的数据
        user_name = data.get('username')
        # age = int(data.get('age'))
        # gender = data.get('gender')
        # education = data.get('education')
        prolific_id = data.get('prolific')
        daily_time_spent = data.get('appUsage')
        frequently_use_type = ",".join(data.get('appType'))
        print('len(frequently_use_type) =',len(frequently_use_type))
        sensitive_type = ",".join(data.get('sensitiveData'))
        sensitive_type_other = data.get('sensitiveDataOther')
        read_policy = data.get('privacyPolicy')
        familiar_with_perm = data.get('permissionFamiliarity')
        leak_actions = ",".join(data.get('appActions'))
        leak_actions_other = data.get('appActionsOther')
        risk_attitude_1 = data.get('question1')
        risk_attitude_2 = data.get('question2')
        risk_attitude_3 = data.get('question3')
        risk_attitude_4 = data.get('question4')
        prefer_type = data.get('appPreference')
        thoughts = data.get('privacyOpinion')

        # 检查用户是否存在
        # user = User.query.filter_by(username=user_name).first()
        # if not user:
        #     return jsonify({"success": False, "message": "用户不存在"}), 400

        # 检查是否已经存在该用户的调查问卷
        # existing_survey = Survey.query.filter_by(user_name=user_name).first()
        # if existing_survey:
        #     return jsonify({"success": False, "message": "该用户的问卷已提交"}), 400

        # 创建新的调查记录
        survey = Survey(
            user_name=user_name,
            prolific_id=prolific_id,  
            daily_time_spent=daily_time_spent,
            frequently_use_type=frequently_use_type,
            sensitive_type=sensitive_type,
            sensitive_type_other=sensitive_type_other,
            read_policy=read_policy,
            familiar_with_perm=familiar_with_perm,
            leak_actions=leak_actions,
            leak_actions_other=leak_actions_other,
            risk_attitude_1=risk_attitude_1,
            risk_attitude_2=risk_attitude_2,
            risk_attitude_3=risk_attitude_3,
            risk_attitude_4=risk_attitude_4,
            prefer_type=prefer_type,
            thoughts=thoughts
        )
        db.session.add(survey)  # 添加到会话
        db.session.commit()  # 提交事务

        return jsonify({"success": True, "message": "问卷提交成功"}), 200

    except Exception as e:
        db.session.rollback()  # 如果出错，回滚事务
        print(f"数据库错误: {e}")
        return jsonify({"success": False, "message": "数据库错误", "Exception": e}), 500


@app.route('/api/submit_questions', methods=['POST'])
def submit_questions():
    data = request.json

    # 从请求中提取参数
    status = data.get('status')
    app_number = data.get('app_number')
    name = data.get('name')  # 当前用户
    responses = data.get('responses')  # 问题列表

    if not status or not responses:
        return jsonify({"success": False, "message": "缺少必要参数"}), 400

    # 动态创建或获取表
    dynamic_table_class = get_or_create_table(status)  # 获取或创建动态表类

    try:
        # 检查 responses 结构是否正确
        if not isinstance(responses, list):
            return jsonify({"success": False, "message": "responses 必须是列表类型"}), 400

        # 获取当前 session 用于操作数据库
        session = sessionmaker(bind=db.engine)()

        for response in responses:
            question = response.get('question')
            question_number = response.get('question_number')
            answer_value = response.get('answer')

            # 检查必需字段是否存在
            if not question or not question_number or answer_value is None:
                return jsonify({"success": False, "message": "每个问题必须包含 question, question_number 和 answer"}), 400

            # 根据答案数值设置对应描述
            if answer_value == 1:
                answer_text = "Very Uncomfortable"
            elif answer_value == 2:
                answer_text = "Uncomfortable"
            elif answer_value == 3:
                answer_text = "So-so"
            elif answer_value == 4:
                answer_text = "Comfortable"
            elif answer_value == 5:
                answer_text = "Very Comfortable"
            elif answer_value == 6:
                answer_text = response.get('moreInfo', "Need more information")
            else:
                return jsonify({"success": False, "message": "Please complete your answers."}), 400

            # 检查是否已经有相同的记录，如果有则更新
            existing_record = session.query(dynamic_table_class).filter_by(
                username=name,
                app_number=app_number,
                question_number=question_number
            ).first()

            if existing_record:
                existing_record.answer = answer_text  # 如果记录存在，更新答案
            else:
                # 创建新记录
                new_record = dynamic_table_class(
                    username=name,
                    app_number=app_number,
                    question_number=question_number,
                    question=question,
                    answer=answer_text
                )
                session.add(new_record)  # 添加新记录到 session
        
        # 提交事务
        session.commit()
        

        return jsonify({"success": True, "message": "数据提交成功"}), 200

    except Exception as e:
        session.rollback()  # 回滚事务
        print(f"数据提交失败: {e}")
        return jsonify({"success": False, "message": f"数据提交失败: {str(e)}"}), 500




if __name__ == '__main__':
        app.run(debug=True)



