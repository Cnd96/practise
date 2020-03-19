#include <vector>
#include <map>
#include <set>
#include <stack>
#include <string>
#include <iostream>
#include <sstream>
#include <algorithm>
#include <cmath>
#include <queue>
#include <fstream>
#include <iomanip>
#include <cstring>

using namespace std;

#define PRINT(x) cout << "DEBUG " << #x << " = " << x <<  endl;

#define all(x) (x).begin(),(x).end()
#define sz(x) ((int)(x).size())
#define pb push_back
#define mp make_pair
#define fr(i, n) for(i = 0; i < (n); i++)
#define frr(i, n) for(int i = 0; i < (n); i++)
#define _cl(x) memset(x, 0, sizeof(x))
#define _rs(x) memset(x, -1, sizeof(x))

typedef vector<int> VI;
typedef pair<int, int> PII;
typedef istringstream ISS;
typedef ostringstream OSS;
typedef long long ll;

int N, P;
int w[200], h[200];
double knapsack[510 * 100];

void read() {
    cin >> N >> P;
    frr(i, N) {
        cin >> w[i] >> h[i];
        P -= 2 * (w[i] + h[i]);
    }
}

void proc() {
    for(int k = 500 * N; k >= 0; --k)
        knapsack[k] = -1;

    knapsack[0] = 0;
    frr(i, N) {
        int mn = min(w[i], h[i]);
        double dh = h[i];
        double dw = w[i];
        double mx = sqrt(dw * dw + dh * dh) - mn;
        for(int k = 500 * N; k >= 0; --k) {
            if(knapsack[k] < -0.5) continue;
            if(k + mn > 500 * N) continue;
            knapsack[k + mn] = max(knapsack[k + mn], knapsack[k] + mx);
        }
    }

    double best = 0;
    for(int k = 500 * N; k >= 0; --k) {
        if(knapsack[k] < -0.5) continue;
        if(k * 2 > P) continue;

        best = max(k + knapsack[k], best);
    }

    best = min(best, P / 2.0);
    frr(i, N) {
        best += w[i] + h[i];
    }
    best *= 2;

    cout << setiosflags(ios::fixed) << setprecision(7) <<  best << endl;
}

int main() {
    int i;
    int NT;

    string ln;

    getline(cin, ln);
    istringstream is(ln);
    is >> NT;

    fr(i, NT) {
        read();
        cout << "Case #" << i + 1 << ": ";
        proc();
    }

    return 0;
}
