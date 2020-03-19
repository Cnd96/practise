#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;
#define lim 1000000007
// #define lim 7
long long xx;
long long temp;
long long fr[2];
long long getCount(int r)
{
    if (r == 1)
    {
        return 2;
    }
    else if (r == 2)
    {
        return 6;
    }
    else
    {

        fr[0] = 2;
        fr[1] = 6;
        for (int i = 2; i < r; i++)
        {
            xx = ((fr[1] * 2) + (2 * fr[0])) % lim;
            temp = fr[1];
            fr[1] = xx;
            fr[0] = temp;
        }
        return fr[1];
    }
}
int main()
{
    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        int r;
        cin >> r;
        long long cc = getCount(r);
        cout << (cc % lim) << endl;
    }
    return 0;
}
