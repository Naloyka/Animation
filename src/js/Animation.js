export default class Animation {
    constructor(btn, drop) {
        this.drop = document.querySelector(`${drop}`)
        this.btn = document.querySelector(`${btn}`)

        this.click = this.click.bind(this)
        this.click()
    }


    click() {
        this.btn.addEventListener('click', () => {
            this.drop.classList.toggle('drop_active')
        })
    }



}
const animation = new Animation('.btn','.drop')
