pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
    }

    tools {
        nodejs 'node-24'
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'rm -rf reports test-results'
                sh 'npm ci'
                sh 'npx playwright install chromium'
            }
        }

        stage('Unit tests') {
            steps {
                sh '''
                    mkdir -p reports
                    node --test \
                        --test-reporter=spec \
                        --test-reporter=junit \
                        --test-reporter-destination=stdout \
                        --test-reporter-destination=reports/unit.xml \
                        calculator.test.js
                '''
            }
        }

        stage('Browser tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports/*.xml,test-results/**/*',
                             allowEmptyArchive: true

            junit 'reports/*.xml'
        }

        success {
            echo 'Unit tests and browser tests passed!'
        }

        failure {
            echo 'Build failed. Check results and artifacts.'
        }
    }
}