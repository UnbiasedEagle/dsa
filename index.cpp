#include <bits/stdc++.h>
using namespace std;
#define int long long
#define mod 1000000007
#define inf 1e18
#define endl "\n"

void countDigits(int num)
{
    int count = 0;

    while (num)
    {
        num /= 10;
        count++;
    }
    cout << count << endl;
}

int reverseNumber(int num)
{
    int rev = 0;
    while (num)
    {
        rev = rev * 10 + num % 10;
        num /= 10;
    }
    return rev;
}

bool isPalindrome(int num)
{
    return num == reverseNumber(num);
}

int gcd(int a, int b)
{
    if (b == 0)
        return a;
    return gcd(b, a % b);
}

void printAllDivisors(int num)
{
    for (int i = 1; i * i <= num; i++)
    {
        if (num % i == 0)
        {
            cout << i << " ";
            if (i != num / i)
                cout << num / i << " ";
        }
    }
    cout << endl;
}

int32_t main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif

    countDigits(12345);

    int reverse = reverseNumber(12345);
    cout << reverse << endl;

    cout << isPalindrome(12321) << endl;

    printAllDivisors(36);
    return 0;
}