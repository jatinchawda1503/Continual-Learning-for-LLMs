import os
import sys
from dotenv import load_dotenv

class Config:
    @staticmethod
    def get_root_path():
        return os.path.dirname(os.path.abspath(__file__))
    
    @staticmethod
    def get_db_config():
        load_dotenv()
        return {
            'dbname': os.getenv('db_name'),     
            'user': os.getenv('db_username'),        
            'password': os.getenv('db_password'),    
            'host': os.getenv('db_host'),            
            'port': os.getenv('db_port'),
            'conversation_table_name': os.getenv('conversation_table_name'),                 
        }
        
    @staticmethod
    def get_openai_api_key():
        load_dotenv()
        return os.getenv('OPENAI_API_KEY')
    
    @staticmethod
    def get_chainlit_secret_key():
        load_dotenv()
        return os.getenv('CHAINLIT_AUTH_SECRET')
    
    @staticmethod
    def get_chainlit_cloud_api_key():
        load_dotenv()
        return os.getenv('CHAINLIT_API_KEY')