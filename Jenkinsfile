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
                    dir
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
                bat '''
                    if not exist dist (echo dist folder not found! & exit 1)
                    rmdir /s /q deploy
                    mkdir deploy
                    xcopy dist deploy\\dist /E /I
                    powershell Compress-Archive -Path deploy\\* -DestinationPath deploy.zip -Force
                    echo "Deploy package created successfully"
                '''
            }
        }
    }
}