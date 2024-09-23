import crypto from 'crypto'

// Computes the SHA256Hash of the inputString
// source https://www.geeksforgeeks.org/how-to-create-hash-from-string-in-javascript/#:~:text=Approach%3A%20Using%20Crypto%20library%E2%80%99s%20createHash()%20method%20with%20SHA%2D256%20algorithm
function createSHA256Hash(inputString) {
    const hash = crypto.createHash('sha256');
    hash.update(inputString);
    let hashedString = hash.digest('hex')

    // Return the first 10 characters of the hashed string, should be enough to avoid collisions for a good amount of urls
    return hashedString.substring(1,11)
}

export function shorternUrl(url) {
    return createSHA256Hash(url)
}