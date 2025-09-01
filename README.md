# Research on Democratizing Privacy Rating

This repository contains the implementation and research artifacts for **DePRa (Democratize Privacy Rating)**, a novel paradigm that empowers everyday users to assess mobile app privacy behaviors. The project challenges the traditional expert-driven privacy auditing approach by incorporating end-user perspectives into privacy evaluations, as described in our research paper "Listen to the Voices of Everyday Users: Democratizing Privacy Ratings for Sensitive Data Access in Mobile Apps".

## Project Structure

### [DePRa/](DePRa/)
**Core Platform Implementation** - The main DEPRA prototype system featuring:
- **Frontend**: React-based user interface with intuitive rating mechanisms
- **Backend**: Flask server with dynamic survey management
- **Database**: MySQL for storing user responses and app metadata
- **Key Features**: Contextual explanations, category-based evaluation, interactive interface, risk preference modeling. 

See [DePRa/README.md](DePRa/README.md) for detailed system architecture and setup instructions.

### [Category-based-Analysis/](Category-based-Analysis/)
**Representative App Selection** - Implementation of the category-based selection algorithm:
- `bertopic_model.ipynb`: BERTopic-based app functionality clustering
- `select_apps.py`: Greedy algorithm for minimal representative app selection
- Addresses selective user participation by enabling rating generalization across functionally similar apps

### [Contextual-Analysis/](Contextual-Analysis/)
**Privacy Behavior Analysis** - Tools for generating contextual explanations of app data access:
- **`static-analysis/`**: Static analysis tools for sensitive API detection
- **`llm-reasoning/`**: Large language model-powered purpose inference
- **`output/`**: Generated explanations for apps across different categories (Events, Social, Tools, Weather)
- Provides users with necessary context about why apps access specific data types

### [App-Data/](App-Data/)
**App Metadata and apk files** - Curated datasets of mobile apps.

### [User-Rating-Results/](User-Rating-Results/)
**Evaluation Data** - Aggregated results from user studies:
- `app_scores.csv`: Aggregated privacy scores for evaluated apps
- `surveys.csv`: Background survey responses from 200 participants
- `user_responses_*.csv`: Detailed user ratings across different app categories
- Demonstrates the effectiveness of democratized privacy assessment

