// 1

const ol = document.querySelector('ol')

const a = ol.children[4]
const b = ol.children[0]

ol.insertBefore(a, b)

// 2

const secondSection = document.querySelector('main').children[1]
const thirdSection = document.querySelector('main').children[2]
const pSecond = secondSection.children[1]
const pThird = thirdSection.children[1]

const h2Third = secondSection.children[0]
const divThird = thirdSection.children[0]
const h2Second = divThird.children[0]

secondSection.insertBefore(h2Second, pSecond)
thirdSection.insertBefore(h2Third, pThird)

// 3
console.log(thirdSection);
thirdSection.remove()

