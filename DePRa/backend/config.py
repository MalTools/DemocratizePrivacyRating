class Config:
    mysql_host = "mymysql"
    mysql_port = 3306
    mysql_user = "userw"
    mysql_password = "pswdw"
    mysql_db = "privdb"

    SECRET_KEY = 'c0e76dfd23d24b86927d2bf7e56f1ec2'
    SQLALCHEMY_DATABASE_URI = f'mysql+mysqlconnector://{mysql_user}:{mysql_password}@{mysql_host}:{mysql_port}/{mysql_db}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
