pipeline {
  agent any
  stages {
    stage('Install test dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Unit Tests') {
      steps {
        sh 'CI=true npm test'
      }
    }
    post {
        always {
            junit '*.xml'
        }
    }
  }
}