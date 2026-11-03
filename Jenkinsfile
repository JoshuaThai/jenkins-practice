pipeline {
    agent any

    tools {
        nodejs 'node-24'
    }

    stages {
        stage('Check environment') {
            steps {
                sh 'node --version'
            }
        }

        stage('Run unit tests') {
            steps {
                sh '''
                    mkdir -p reports
                    rm -f reports/results.xml

                    node --test \
                        --test-reporter=spec \
                        --test-reporter=junit \
                        --test-reporter-destination=stdout \
                        --test-reporter-destination=reports/results.xml \
                        calculator.test.js
                '''
            }
        }
    }

    post {
        always {
            junit 'reports/results.xml'
        }

        success {
            echo 'All tests passed!'
        }

        failure {
            echo 'Build failed. Check the logs and test results.'
        }
    }
}
