vector<int> primesUptoN(int n) {
    vector<bool> isPrime(n + 1, true);
    vector<int> primes;
    for (int i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push_back(i);
            for (int j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return primes;   
}

// Time Complexity: O(n log(log(n)))
// Space Complexity: O(n)