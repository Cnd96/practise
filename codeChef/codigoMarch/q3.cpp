#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;
int main()
{

    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        int n, p, q;
        string s;
        cin >> n >> p >> q;
        int kk[n];
        int aa[n];
        int ss[n];
        // long long mss[n];
        char bb[n];
        long long frostPK = 0;
        long long frostPA = 0;
        long long dustPK = 0;
        long long dustPA = 0;
        bool ddd[n] = {0};

        for (int j = 0; j < n; j++)
        {
            cin >> kk[j];
        }
        for (int j = 0; j < n; j++)
        {
            cin >> aa[j];
        }
        for (int j = 0; j < n; j++)
        {
            cin >> ss[j];
        }
        cin >> s;
        for (int j = 0; j < n; j++)
        {
            bb[j] = s[j];
        }

        for (int j = 0; j < n; j++)
        {
            for (int k = 0; k < n; k++)
            {
                if ((kk[j] + aa[j]) == ss[k])
                {
                    ddd[j] = 1;
                    break;
                }
            }
        }
        for (int j = 0; j < n; j++)
        {
            if (bb[j] == '0')
            {
                if (ddd[j])
                {
                    frostPA += aa[j];
                    frostPK += kk[j];
                    // break;
                }
            }
            else
            {
                if (ddd[j])
                {
                    dustPA += aa[j];
                    dustPK += kk[j];
                }
            }
        }

        // cout << frostPK << " " << frostPA << endl;
        // cout << dustPK << " " << dustPA << endl;
        long long ff = (p * frostPK) + (q * frostPA);
        long long dd = (p * dustPK) + (q * dustPA);
        if (ff > dd)
        {
            cout << "Frost" << endl;
        }
        else
        {
            cout << "DustinKiller" << endl;
        }
    }
    return 0;
}
