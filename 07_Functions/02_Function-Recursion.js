function loop(x) {
    if(x >= 10) {
        return
    }
    else {
        loop(x + 1)
    }
}

loop(0) 