pipeline {
    agent any
    stages {
        stage('git repo clone') {
            steps {
                git branch: 'main', url: 'https://github.com/RamkumarMrj/MovieTicketsBackend.git'
            }
        }
        stage('clean') {
            steps {
                sh "mvn clean"
            }
        }
        stage('package') {
            steps {
                sh "mvn package"
            }
        }
//         stage('docker compose') {
//             steps {
//                 sh "docker-compose up"
//             }
//         }
//         stage('docker build') {
//             steps {
//                 sh "docker build -t my-movie-plan ."
//             }
//         }
        stage('docker run') {
             steps {
                 sh "docker run -p 5555:5555 --name movie_tickets_backend --link mysql_movie_tickets -d movie_tickets_backend:1.0"
             }
        }
    }
}
