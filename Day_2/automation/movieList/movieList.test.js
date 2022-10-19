const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/Foundations%20Week%206/Day_2/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Movie List', async () => {
    let addMovieBar = await driver.findElement(By.xpath('//form/input'))

    await addMovieBar.sendKeys('Morbius\n')
    await driver.sleep(1000)

    let crossOutMovie = await driver.findElement(By.css('span'))
    await crossOutMovie.click()
    await driver.sleep(2000)

    let deleteMovie = await driver.findElement(By.id('Morbius'))
    await deleteMovie.click()
    await driver.sleep(2000)
})