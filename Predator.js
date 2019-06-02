class Predator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10
        this.directions = [];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            this.mernelukyanq--
            matrix[this.y][this.x] = 0
            matrix[norVandak[1]][norVandak[0]] = 3

            this.x = norVandak[0]
            this.y = norVandak[1]
            this.energy -= 2
        }

        if (this.energy <= 0) {
            this.mernel()
        }
    }
    utel() {
        var datarkVandakner = this.yntrelVandak(2)
        var norVandak = random(datarkVandakner)

        if (norVandak) {
            this.kyanq++
            this.mernelukyanq = 20
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3

            this.x = norVandak[0]
            this.y = norVandak[1]

            for (var i in xotakerArr) {
                var xotakerObj = xotakerArr[i]
                if (xotakerObj.x == this.x && xotakerObj.y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
            this.energy += 2
        }
        else {
            this.sharjvel();
        }
        if (this.energy >= 13) {
            this.bazmanal();
        }
    }
    bazmanal() {
        var datarkVandakner = this.yntrelVandak(2);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 3;

            var norGishatich = new Predator(norx, nory);
            gishatichArr.push(norGishatich);
            this.energy = 5
            for (var i in xotakerArr) {
                var xotakerObj = xotakerArr[i];
                if (xotakerObj.x == norx && xotakerObj.y == nory) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
    }
    mernel() {

        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                gishatichArr.splice(i, 1);
            }
        }
    }
}