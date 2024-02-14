// pipeline {
//   agent { 
//     docker { 
//       image 'mcr.microsoft.com/playwright:v1.41.1-jammy'
//     } 
//   }
//   stages {
//     stage('install playwright') {
//       steps {
//         sh '''
//           npm i -D @playwright/test
//           npx playwright install
//         '''
//       }
//     }
//     stage('help') {
//       steps {
//         sh 'npx playwright test --help'
//       }
//     }
//     stage('test') {
//       steps {
//         sh '''
//           npx playwright test --list
//           npx playwright test --project=chromium
//         '''
//       }
//       post {
//         success {
//           archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
//           sh 'rm -rf *.png'
//         }
//       }
//     }
//   }
// }

pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.41.1-jammy' } }
   stages {
      stage('e2e-tests') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test'
         }
      }
   }
}