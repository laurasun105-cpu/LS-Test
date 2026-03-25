pipeline {
    agent any

    stages {
        stage('Lint JS') {
            steps {
                 bat '''
                 npm install
                 npm run lint
                 echo "Lint passed"
                '''
            }
        }
        stage('Build') {
            steps {
                bat '''
                    if not exist "test\\index.test.js" (echo index.test.js not found! & exit 1)
                    if not exist "src\\index.js" (echo index.js not found! & exit 1)
                    echo "Build passed"
                    ls -la
                '''
            }
        }
        stage('Test') {
            steps {
                 bat '''
                 npm npm test
                 echo "Test passed"
                '''
            }
        }
         stage('Deploy') {
            steps {
                bat 'mkdir deploy'
                bat 'xcopy dist deploy\\dist /E /I'
                bat 'powershell Compress-Archive deploy deploy.zip'
            }
        }
    }
}