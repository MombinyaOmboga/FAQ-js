document.addEventListener('DOMContentLoaded', function () {
    const plusIcons = document.querySelectorAll('.plus')
    const minusIcons = document.querySelectorAll('.minus')

    plusIcons.forEach((plusIcon, index) => {
      plusIcon.addEventListener('click', function () {
        const questionContainer = this.closest('.quiz-container')
        const answerContainer = questionContainer.querySelector('.a-align')

        answerContainer.classList.toggle('show-answer')
        plusIcon.style.display = 'none'
        minusIcons[index].style.display = 'inline-block'
      })
    })

    minusIcons.forEach((minusIcon, index) => {
      minusIcon.addEventListener('click', function () {
        const questionContainer = this.closest('.quiz-container')
        const answerContainer = questionContainer.querySelector('.a-align')

        answerContainer.classList.toggle('show-answer')
        minusIcon.style.display = 'none'
        plusIcons[index].style.display = 'inline-block'
      })
    })
  })