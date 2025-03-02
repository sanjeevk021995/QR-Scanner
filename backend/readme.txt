# 1. Create project folder
mkdir myproject
cd myproject

# 2. Python virtual environment
python -m venv venv
venv\Scripts\activate     # Windows
# source venv/bin/activate # Mac/Linux

# 3. Install backend dependencies
pip install django djangorestframework djangorestframework-simplejwt

# 4. Start Django project and app
django-admin startproject backend .
python manage.py startapp users

# 5. Start React (Vite) frontend
cd ..
npm create vite@latest frontend --template react
cd frontend
npm install
