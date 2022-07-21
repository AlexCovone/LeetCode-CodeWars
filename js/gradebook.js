// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
    let avgScore = (s1 + s2 + s3) / 3

    if(avgScore <= 100 && avgScore >= 90){
        return 'A'
    }else if(avgScore < 90 && avgScore >= 80){
        return 'B'
    }else if(avgScore < 80 && avgScore >= 70){
        return 'C'
    }else if(avgScore < 70 && avgScore >= 60){
        return 'D'
    }else{
        return 'F'
    }
  }

// Use Turnary Operator

function getGrade(s1, s2, s3){
    let avgScore = (s1 + s2 + s3) / 3
    return avgScore >= 90 ? 'A' : avgScore >= 80 ? 'B' : avgScore >= 70 ? 'C' : avgScore >= 60 ? 'D' : 'F'
}