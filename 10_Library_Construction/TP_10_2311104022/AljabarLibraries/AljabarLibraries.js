// AljabarLibraries/AljabarLibraries.js

function AkarPersamaanKuadrat(persamaan) {
    const [a, b, c] = persamaan;
    const D = b * b - 4 * a * c;

    if (D < 0) {
        return []; // Tidak punya akar real
    } else {
        const akar1 = (-b + Math.sqrt(D)) / (2 * a);
        const akar2 = (-b - Math.sqrt(D)) / (2 * a);
        return [akar1, akar2];
    }
}

function HasilKuadrat(persamaan) {
    const [a, b] = persamaan;
    // (ax + b)^2 = a^2x^2 + 2abx + b^2
    const hasil = [
        a * a,          // a^2
        2 * a * b,      // 2ab
        b * b           // b^2
    ];
    return hasil;
}

module.exports = {
    AkarPersamaanKuadrat,
    HasilKuadrat
};
