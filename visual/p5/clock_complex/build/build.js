var movementScale = 50;
var matrix;
var numpad;
function setup() {
    var radius = 30;
    var width = radius * 2 * 8;
    var height = radius * 2 * 12;
    numpad = [
        [
            ["ㅏ", "ㅡ", "ㅡ", "ㄱ"],
            ["ㅣ", "ㅏ", "ㄱ", "ㅣ"],
            ["ㅣ", "ㅣ", "ㅣ", "ㅣ"],
            ["ㅣ", "ㅣ", "ㅣ", "ㅣ"],
            ["ㅣ", "ㄴ", "ㅓ", "ㅣ"],
            ["ㄴ", "ㅡ", "ㅡ", "ㅓ"]
        ],
        [
            ["ㅏ", "ㅡ", "ㄱ", "."],
            ["ㄴ", "ㄱ", "ㅣ", "."],
            [".", "ㅣ", "ㅣ", "."],
            [".", "ㅣ", "ㅣ", "."],
            ["ㅏ", "ㅓ", "ㄴ", "ㄱ"],
            ["ㄴ", "ㅡ", "ㅡ", "ㅓ"]
        ],
        [
            ['ㅏ', 'ㅡ', 'ㅡ', 'ㄱ'],
            ['ㄴ', 'ㅡ', 'ㄱ', 'ㅣ'],
            ['ㅏ', 'ㅡ', 'ㅓ', 'ㅣ'],
            ['ㅣ', 'ㅏ', 'ㅡ', 'ㅓ'],
            ['ㅣ', 'ㄴ', 'ㅡ', 'ㄱ'],
            ['ㄴ', 'ㅡ', 'ㅡ', 'ㅓ']
        ],
        [
            ['ㅏ', 'ㅡ', 'ㅡ', 'ㄱ'],
            ['ㄴ', 'ㅡ', 'ㄱ', 'ㅣ'],
            ['ㅏ', 'ㅡ', 'ㅓ', 'ㅣ'],
            ['ㄴ', 'ㅡ', 'ㄱ', 'ㅣ'],
            ['ㅏ', 'ㅡ', 'ㅓ', 'ㅣ'],
            ['ㄴ', 'ㅡ', 'ㅡ', 'ㅓ']
        ],
        [
            ['ㅏ', 'ㄱ', 'ㅏ', 'ㄱ'],
            ['ㅣ', 'ㅣ', 'ㅣ', 'ㅣ'],
            ['ㅣ', 'ㄴ', 'ㅓ', 'ㅣ'],
            ['ㄴ', 'ㅡ', 'ㄱ', 'ㅣ'],
            ['.', '.', 'ㅣ', 'ㅣ'],
            ['.', '.', 'ㄴ', 'ㅓ']
        ],
        [
            ['ㅏ', 'ㅡ', 'ㅡ', 'ㄱ'],
            ['ㅣ', 'ㅏ', 'ㅡ', 'ㅓ'],
            ['ㅣ', 'ㄴ', 'ㅡ', 'ㄱ'],
            ['ㄴ', 'ㅡ', 'ㄱ', 'ㅣ'],
            ['ㅏ', 'ㅡ', 'ㅓ', 'ㅣ'],
            ['ㄴ', 'ㅡ', 'ㅡ', 'ㅓ']
        ],
        [
            ['ㅏ', 'ㅡ', 'ㅡ', 'ㄱ'],
            ['ㅣ', 'ㅏ', 'ㅡ', 'ㅓ'],
            ['ㅣ', 'ㄴ', 'ㅡ', 'ㄱ'],
            ['ㅣ', 'ㅏ', 'ㄱ', 'ㅣ'],
            ['ㅣ', 'ㄴ', 'ㅓ', 'ㅣ'],
            ['ㄴ', 'ㅡ', 'ㅡ', 'ㅓ']
        ],
        [
            ['ㅏ', 'ㅡ', 'ㅡ', 'ㄱ'],
            ['ㅣ', 'ㅏ', 'ㄱ', 'ㅣ'],
            ['ㄴ', 'ㅓ', 'ㅣ', 'ㅣ'],
            ['.', '.', 'ㅣ', 'ㅣ'],
            ['.', '.', 'ㅣ', 'ㅣ'],
            ['.', '.', 'ㄴ', 'ㅓ']
        ],
        [
            ['ㅏ', 'ㅡ', 'ㅡ', 'ㄱ'],
            ['ㅣ', 'ㅏ', 'ㄱ', 'ㅣ'],
            ['ㅏd', 'ㄴ', 'ㅓ', 'ㅓd'],
            ['ㅏu', 'ㅏ', 'ㄱ', 'ㅓu'],
            ['ㅣ', 'ㄴ', 'ㅓ', 'ㅣ'],
            ['ㄴ', 'ㅡ', 'ㅡ', 'ㅓ']
        ],
        [
            ['ㅏ', 'ㅡ', 'ㅡ', 'ㄱ'],
            ['ㅣ', 'ㅏ', 'ㄱ', 'ㅣ'],
            ['ㅣ', 'ㄴ', 'ㅓ', 'ㅣ'],
            ['ㄴ', 'ㅡ', 'ㄱ', 'ㅣ'],
            ['ㅏ', 'ㅡ', 'ㅓ', 'ㅣ'],
            ['ㄴ', 'ㅡ', 'ㅡ', 'ㅓ']
        ]
    ];
    matrix = [];
    for (var i = 0; i < 8; i++) {
        var clocks = [];
        for (var j = 0; j < 12; j++) {
            clocks.push(new Clock(width / 8 * i + radius, height / 12 * j + radius, radius));
        }
        matrix.push(clocks);
    }
    createCanvas(width, height);
    stroke(255);
}
function draw() {
    background(230);
    var sHour = pad(hour(), 2);
    var sMinute = pad(minute(), 2);
    var numBoard = [[Number(sHour[0]), Number(sHour[1])], [Number(sMinute[0]), Number(sMinute[1])]];
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 12; j++) {
            var bi = floor(i / 4);
            var bj = floor(j / 6);
            var pickNum = numBoard[bj][bi];
            matrix[i][j].setAngleFromNumpad(numpad[pickNum][j % 6][i % 4]);
            matrix[i][j].draw();
        }
    }
}
function pad(num, size) {
    var s = num + "";
    while (s.length < size)
        s = "0" + s;
    return s;
}
var Clock = (function () {
    function Clock(cx, cy, radius) {
        this.cx = cx;
        this.cy = cy;
        this.radius = radius;
        this.angMin = HALF_PI + QUARTER_PI;
        this.angHour = HALF_PI + QUARTER_PI;
        this.minutesRadius = this.radius * 1;
        this.hoursRadius = this.radius * 1;
        this.clockDiameter = this.radius * 2;
    }
    Clock.prototype.draw = function () {
        noStroke();
        fill(237, 34, 93);
        ellipse(this.cx, this.cy, this.clockDiameter, this.clockDiameter);
        this.angMin = this.goalMin;
        this.angHour = this.follow(this.angHour, this.goalHour);
        stroke(255);
        strokeWeight(2);
        line(this.cx, this.cy, this.cx + cos(this.angMin) * this.minutesRadius, this.cy + sin(this.angMin) * this.minutesRadius);
        strokeWeight(2);
        line(this.cx, this.cy, this.cx + cos(this.angHour) * this.hoursRadius, this.cy + sin(this.angHour) * this.hoursRadius);
    };
    Clock.prototype.setAngle = function (angleMin, angleHour) {
        this.goalMin = angleMin;
        this.goalHour = angleHour;
    };
    Clock.prototype.setAngleFromNumpad = function (numpad) {
        numpad = this.translator(numpad);
        this.goalMin = numpad["x"];
        this.goalHour = numpad["y"];
    };
    Clock.prototype.translator = function (word) {
        switch (word) {
            case "ㅏ":
                return { "x": HALF_PI, "y": 0 };
            case "ㅡ":
                return { "x": 0, "y": PI };
            case "ㄱ":
                return { "x": PI, "y": HALF_PI };
            case "ㅣ":
                return { "x": PI + HALF_PI, "y": HALF_PI };
            case "ㄴ":
                return { "x": PI + HALF_PI, "y": 0 };
            case "ㅓ":
                return { "x": PI, "y": HALF_PI + PI };
            case "ㅏu":
                return { "x": HALF_PI, "y": PI + HALF_PI + QUARTER_PI };
            case "ㅏd":
                return { "x": PI + HALF_PI, "y": QUARTER_PI };
            case "ㅓu":
                return { "x": PI + QUARTER_PI, "y": HALF_PI };
            case "ㅓd":
                return { "x": PI + HALF_PI, "y": HALF_PI + QUARTER_PI };
            default:
                return { "x": HALF_PI + QUARTER_PI, "Y": HALF_PI + QUARTER_PI };
        }
    };
    Clock.prototype.follow = function (prev, goal) {
        if (prev > goal) {
            prev = prev + 2 * PI;
        }
        var diff = (goal - prev) / movementScale;
        var pgoal = prev + diff;
        while (pgoal > 2 * PI) {
            pgoal = PI - 2 * PI;
        }
        return pgoal;
    };
    return Clock;
}());
//# sourceMappingURL=../sketch/sketch/build.js.map