/**
 * querySelectorのエイリアス
 */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * 初期化処理
 */
function ui() {
    $('[name="site"]').insertAdjacentHTML('afterbegin', `
        <option value="https://tw6.jp/scenario/show">TW6</option>
        <option value="https://tw7.t-walker.jp/scenario/show" selected>TW7</option>
        <option value="https://tw8.t-walker.jp/scenario/show">TW8</option>
    `);
    $$('input,select').forEach(elmn => elmn.addEventListener('input', event => {
        let site = $('[name="site"]').value;
        let word = $('[name="word"]').value;
        $('[name="url"]').value = `https://www.google.com/search?q=site:${site} ${word}`;
    }));
    $('#search__form').addEventListener('submit', event => {
        window.location.href = $('[name="url"]').value;
        event.preventDefault();
        return false;
    });
}

export { ui };
