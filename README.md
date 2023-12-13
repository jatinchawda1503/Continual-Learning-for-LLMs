# Continual-Learning-for-LLMs
 Continual Learning for Large Language models

## Setup

### Using Docker

1. Setup .env file use example from. env.example. Note: donot add db_host manually.
```
db_username = 'postgres'
db_password = 'postgres'
db_name = 'memory_manager'
db_host = db
db_port = '5432'
conversation_table_name = 'chat_history'
OPENAI_API_KEY = 'sk-<your-openai-api-key>'
```
2. docker compose up

### Without Docker

#### Postgres Setup
1. Download postgres - https://www.postgresql.org/download/
2. Create new database for the project

#### Python
1. setup .env file
```
db_username = 'postgres'
db_password = 'postgres'
db_name = 'memory_manager'
db_host = '127.0.0.1'
db_port = '5432'
conversation_table_name = 'chat_history'
OPENAI_API_KEY = 'sk-<your-openai-api-key>'
```
2. Setup enviornment

```
conda create -n cll python=3.11 

conda activate cll
```

3. Go to backend folder

```
cd continual_learning/backend
```
4. Install the packages from requirements.txt

```
pip install -r requirements.txt
```
5. Run server

```
python backend.py
```

#### Frontend

1. Go to frontend folder

```
cd continual_learning/frontend
```

2. Install packages

```
npm i
```

3. Run server

```
npm run dev
```
