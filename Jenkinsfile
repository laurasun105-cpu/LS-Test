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
                    if [ ! -f "test/index.test.js" ]; then echo "index.test.js not found!" && exit 1; fi
                    if [ ! -f "src/index.js" ]; then echo "src/index.js not found!" && exit 1; fi
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