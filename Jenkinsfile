pipeline {
    agent any

    tools {
        nodejs 'node-24'
    }

    stages {
        stage('Check environment') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Run unit tests') {
            steps {
                sh 'node --test calculator.test.js'
            }
        }
    }

    post {
        always {
            echo 'Test execution finished. See console output.'
        }

        success {
            echo 'All tests passed!'
        }

        failure {
            echo 'Build failed. Check the failing step.'
        }
    }
}
