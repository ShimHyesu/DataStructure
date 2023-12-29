class ArrayList {
    constructor() {
        this.list = [];
        this.curPos = -1;
    }

    //리스트에 데이터 삽입
    insert(data) {
        this.list.push(data)
    }

    //맨 처음 데이터 참조
    first() {
        if (this.list.length == 0) {
            return false;
        }

        this.curPos = 0;
        return true

    }

    //순차 데이터 참조
    next() {
        if (this.curPos < this.list.length - 1) {
            this.curPos += 1
            return true
        }

        return false
    }

    //리스트 데이터 삭제
    remove() {
        if (this.curPos < this.list.length - 1) {
            var temp = this.list[this.curPos]
            this.list.splice(this.curPos, 1)
            this.curPos -= 1;
            return temp
        }

        return false
    }

    //리스트에 저장된 데이터 수 반환
    count() {
        return this.list.length
    }

    //리스트 데이터 조회
    get() {
        return this.list[this.curPos]
    }
}

const arrayList = new ArrayList();

arrayList.insert('a')
arrayList.insert('b')
arrayList.insert('b')
arrayList.insert('c')

console.log('현재 데이터 수: ', arrayList.count())

if (arrayList.first()) {
    console.log(arrayList.get())

    while (arrayList.next()) {
        console.log(arrayList.get())
    }
}

if (arrayList.first()) {
    if(arrayList.get()=='b'){
        arrayList.remove()
    }

    while (arrayList.next()) {
        if(arrayList.get()=='b'){
            arrayList.remove()
        }
    }
}


console.log('현재 데이터 수: ', arrayList.count())

if (arrayList.first()) {
    console.log(arrayList.get())

    while (arrayList.next()) {
        console.log(arrayList.get())
    }
}