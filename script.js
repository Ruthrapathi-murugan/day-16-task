function countdown(callback, count) {
    setTimeout(function() {
        document.querySelector('#countdown').innerText =`counter:${10}`;
        setTimeout(function() {
                document.querySelector('#countdown').innerText = `counter:${9}`
                setTimeout(function() {
                document.querySelector('#countdown').innerText =  `counter:${8}`
                setTimeout(function() {
                    document.querySelector('#countdown').innerText = `counter:${7}`
                    setTimeout(function() {
                        document.querySelector('#countdown').innerText =  `counter:${6}`
                        setTimeout(function() {
                            document.querySelector('#countdown').innerText =  `counter:${5}`
                            setTimeout(function() {
                                document.querySelector('#countdown').innerText =  `counter:${4}`
                                setTimeout(function() {
                                    document.querySelector('#countdown').innerText =  `counter:${3}`
                                    setTimeout(function() {
                                        document.querySelector('#countdown').innerText = `counter:${2}`
                                        setTimeout(function() {
                                            document.querySelector('#countdown').innerText = `counter:${1}`
                                            setTimeout(function() {
                                                document.querySelector('#countdown').innerText = `counter:${1}`
                                            callback();
                                            },1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

function displayMessage() {
    document.querySelector('#countdown').innerText = "Happy Independence Day";
}

countdown(displayMessage, 10);
