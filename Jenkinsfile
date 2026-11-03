pipeline {
    agent any

    stages {
        stage('Run script') {
            steps {
                sh 'sh hello.sh'
            }
        }
    }

    post {
        success {
            echo 'The repository script ran successfully!'
        }

        failure {
            echo 'Something failed. Check the console output.'
        }
    }
}
