#from pymongo import MongoClient
from mongoengine import connect
# MongoDB database name and connection URL
#MONGO_DB_NAME = 'issuetrackerdb'
#MONGO_CONNECTION_URL = 'mongodb://localhost:27017/'

# Create a MongoDB client instance
#client = MongoClient(MONGO_CONNECTION_URL)

# Connect to the database
#db = client[MONGO_DB_NAME]


db_name = "issuetrackerdb"
connect(db=db_name, host='localhost:27017')
