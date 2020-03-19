#include <bits/stdc++.h>

using namespace std;

#define SPEED                    \
    ios::sync_with_stdio(false); \
    cin.tie(0);                  \
    cout.tie(0)
#define fileio freopen("in.in", "r", stdin), freopen("out.out", "w", stdout);
#define ll long long int
#define FF first
#define SS second
#define mp make_pair
#define pb push_back
#define pii pair<int, int>
#define pll pair<long long int, long long int>
#define sd(x) scanf("%d", &x)
#define slld(x) scanf("%lld", &x)
#define pd(x) printf("%d\n", x)
#define plld(x) printf("%lld\n", x)
#define pss printf
#define MOD 1000000007
#define INF 1e18
#define eps 0.00001
#define endl '\n'
#define debug(n1) cout << n1 << endl

int t;
int n, m, q;
int cnt[100005];
bool torn[100005];

int main()
{
    SPEED;
    int xx=0;
    cin >> t;
    for (int T = 1; T <= t; T++)
    {
        cin >> n >> m >> q;
        for (int i = 0; i <= n; i++)
        {
            cnt[i] = 0;
            torn[i] = 0;
        }
        for (int i = 1; i <= m; i++)
        {
            int x;
            cin >> x;
            torn[x] = 1;
        }
        for (int i = 1; i <= q; i++)
        {
            int x;
            cin >> x;
            cnt[x]++;
            // cout<<"dwe" <<cnt[x]<<endl;
        }
        ll ans = 0;
        for (int i = 1; i <= n; i++)
            for (int j = i; j <= n; j += i)
            {
               xx++;
                if (!torn[j]){
                    //  cout<<"o "<<cnt[i]<<endl;
                    ans+=cnt[i];
                }
                    
            }

        cout << "Case #" << T << ": " << ans << endl;
    }
    cout<<"xx :"<<xx;
    return 0;
}