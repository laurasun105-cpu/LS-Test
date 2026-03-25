pipeline {
    agent any
    tools { nodejs 'Node 20' }
    stages {
        stage('Lint JS') {
            steps {
                sh 'npm init -y'
                sh 'npm install eslint --save-dev'
                sh 'npx eslint src/main.js'
            }
        }
        stage('Build Verify') {
            steps {
                sh '''
                    if [ ! -f "index.html" ]; then exit 1; fi
                    if [ ! -f "src/main.js" ]; then exit 1; fi
                    echo "验证通过"
                '''
            }
        }
    }
}