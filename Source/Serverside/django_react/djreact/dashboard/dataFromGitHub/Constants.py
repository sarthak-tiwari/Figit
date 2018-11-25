#This class contains all the constants across the python backend
import os 
class Constants:

    GITHUB_USERNAME = "sarthak-tiwari"
    #GITHUB_USERNAME = ""
    GITHUB_PASSWORD = "sarthak1!"
    #GITHUB_PASSWORD = ""

    #DATABASE_PATH = "C:\\Users\\Shefali Anand\\Desktop\\MSSE\\Fall18\\SER515\\Project\\GitHubAnalyzer\\githubanalyzer\\Source\\Serverside\\django_react\\djreact\\db.sqlite3"
    #DATABASE_PATH = "...\\db.sqlite3"
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    DATABASE_PATH = os.path.join(BASE_DIR, 'db.sqlite3')
