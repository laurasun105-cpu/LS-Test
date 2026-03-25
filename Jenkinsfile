pipeline {
    agent any

    stages {
        stage('Lint JS') {
            steps {
                 bat '''
                 npm install
                 npm run lint
                '''
            }
        }
        stage('Build Verify') {
            steps {
                bat '''
                    if [ ! -f "index.html" ]; then exit 1; fi
                    if [ ! -f "src/main.js" ]; then exit 1; fi
                    echo "验证通过"
                '''
            }
        }
    }
}