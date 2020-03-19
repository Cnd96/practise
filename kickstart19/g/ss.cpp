/* cerberus97 - Hanit Banga */

#include <iostream>
#include <iomanip>
#include <cassert>
#include <cmath>
#include <cstdio>
#include <cstring>
#include <cstdlib>
#include <map>
#include <set>
#include <queue>
#include <stack>
#include <vector>
#include <algorithm>

using namespace std;

#define pb push_back
// #define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL)

typedef long long ll;
typedef long double ld;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;

const int N = 25;

ll a[N], b[N];

int main()
{
    cout<<(3^1);
    // fast_cin();
    int tc;
    cin >> tc;
    for (int t = 1; t <= tc; ++t)
    {
        // cout << "Case #" << t << ": ";
        int n, h;
        cin >> n >> h;
        for (int i = 0; i < n; ++i)
        {
            cin >> a[i];
        }
        for (int i = 0; i < n; ++i)
        {
            cin >> b[i];
        }
        int tot = (1 << n);
        vector<int> ways(tot, 0);
        for (int mask = 0; mask < tot; ++mask)
        {
            ll sum = 0;
            for (int i = 0; i < n; ++i)
            {
                
                if (!(mask & (1 << i)))
                {
                    // cout<<b[i]<<" ,";
                    sum += b[i];
                }
            }
            // cout<<"m "<<mask<<endl;
            if (sum >= h)
            {
                ways[mask] = 1;
            }
        }

        
        for (int i = 0; i < n; ++i)
        {
            for (int mask = 0; mask < tot; ++mask)
            {
                if (mask & (1 << i))
                {
                    ways[mask] += ways[mask ^ (1 << i)];
                }
            }
        }
        for (int mask = 0; mask < tot; ++mask)
        {
            cout << ways[mask] << endl;
        }

        ll ans = 0;
        for (int mask = 0; mask < tot; ++mask)
        {
            ll sum = 0;
            for (int i = 0; i < n; ++i)
            {
                if (mask & (1 << i))
                {
                    sum += a[i];
                }
            }
            if (sum >= h)
            {
                ans += ways[mask];
            }
        }

        // cout << ans << '\n';
    }
}