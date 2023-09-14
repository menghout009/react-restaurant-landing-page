pipeline{
    agent{
        node{
            label 'agent1'
        }
    }
    tools {
        nodejs 'npm'
    }
    stages{
        stage('Build'){
            steps{
                sh 'docker build -t menghout43/react-restaurant .'
                sh 'docker push menghout43/react-restaurant'
            }
        }
        stage('Deploy'){
            steps{
                sh 'docker compose build'
                sh 'docker compose up -d'
            }
        }
    }
}