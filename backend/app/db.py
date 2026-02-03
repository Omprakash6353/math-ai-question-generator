from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["math_ai"]
questions_collection = db["questions"]