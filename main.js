const dateSet = document.getElementById('dateSet');
const dateSearch = document.getElementById('dateSearch');
const remainingTime = document.getElementById('diffTime');

function showClock() {
    const diffTime = moment(dateSet.value).diff(moment());
    const diffDays = Math.floor((diffTime / 1000) / 86400); 
    const diffHours = Math.floor(((diffTime / 1000) % 86400) / 3600);
    const diffMinutes = Math.floor(((diffTime / 1000) % 3600) / 60);
    const diffSeconds = Math.floor((diffTime / 1000) % 60);

    remainingTime.textContent = `${dateSet.value}まで後${diffDays}日${diffHours}時間${diffMinutes}分${diffSeconds}秒`;
};

dateSearch.addEventListener('click', () => {
    setInterval('showClock()', 1000);
});

//何も日付を選択しなかった場合にはアラートを設定すると良い