#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define int unsigned long long
#define hell 1000000007

void multiply(int F[2][2], int M[2][2])
{
    int x = ((F[0][0] * M[0][0]) % hell + F[0][1] * M[1][0] % hell + hell) % hell;
    int y = ((F[0][0] * M[0][1]) % hell + (F[0][1] * M[1][1]) % hell + hell) % hell;
    int z = ((F[1][0] * M[0][0]) % hell + (F[1][1] * M[1][0]) + hell) % hell;
    int w = ((F[1][0] * M[0][1]) % hell + (F[1][1] * M[1][1]) % hell + hell) % hell;

    F[0][0] = x;
    F[0][1] = y;
    F[1][0] = z;
    F[1][1] = w;
}

void power(int F[2][2], int n)
{
    if (n == 0 || n == 1)
        return;
    int M[2][2] = {{2, 2}, {1, 0}};

    power(F, n / 2);
    multiply(F, F);

    if (n % 2 != 0)
        multiply(F, M);
}

int solve_for_n(int n)
{

    int F[2][2] = {{2, 2}, {1, 0}};
    if (n == 0)
        return 1;
    if (n == 1)
        return 2;
    power(F, n - 1);
    return ((2 * F[0][0]) % hell + F[0][1] + hell) % hell;
}

signed main()
{
    std::ios_base::sync_with_stdio(false);
    cin.tie(0);
    
    ll t;
    cin >> t;
    while (t--)
    {
        ll n;
        cin >> n;
        cout << solve_for_n(n) << endl;
    }
    return 0;
}