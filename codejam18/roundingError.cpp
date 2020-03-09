#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main()
{
    // vector<int> myvector{1, 2, 3, 4, 5};
    // myvector.erase(myvector.begin() + 2);
    // for (auto it = myvector.begin(); it != myvector.end(); ++it)
    //     cout << ' ' << *it;
    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        double n, l, temp, fraction;
        int cPeople = 0;
        double hun = 100;
        int rUpNo = 0;
        int rDoNo = 0;
        double result = 0;
        vector<double> rDoNos;
        vector<double> rUpNos;
        vector<double> rrNos;
        cin >> n >> l;
        for (int j = 0; j < l; j++)
        {
            double pe;
            cin >> pe;
            cPeople += (int)pe;
            result += round((pe * hun) / n);
            fraction = modf(((pe * hun) / n), &temp);
            if (fraction != 0)
            {
                int result = static_cast<int>(fraction * 10) % 10;
                if (result < 5)
                {
                    rDoNos.push_back(pe);
                    rDoNo++;
                }
                else
                {
                    rUpNos.push_back(pe);
                    rUpNo++;
                }
            }
            else
            {
                rrNos.push_back(pe);
            }
        }
        int rpeople = n - cPeople;
        if (rDoNo > 0)
        {
            for (int j = 0; j < rDoNos.size(); j++)
            {
                int startVal = rDoNos[j];
                int tempP = 0;
                bool alloc = false;
                while (tempP < rpeople)
                {

                    rDoNos[j]++;

                    tempP++;
                    fraction = modf(((rDoNos[j] * hun) / n), &temp);
                    if (fraction != 0)
                    {
                        int res = static_cast<int>(fraction * 10) % 10;
                        if (res > 4)
                        {
                            rUpNos.push_back(rDoNos[j]);
                            result += round((rDoNos[j] * hun) / n);
                            result -= round((startVal * hun) / n);
                            rUpNo++;
                            alloc = true;
                            rDoNo--;
                            break;
                        }
                    }
                    else
                    {
                        alloc = true;
                        rrNos.push_back(rDoNos[j]);
                        result += round((rDoNos[j] * hun) / n);
                        result -= round((startVal * hun) / n);
                        rDoNo--;
                        break;
                    }
                }
                if (alloc)
                {
                    rpeople -= tempP;
                }
                if (rpeople <= 0)
                {
                    break;
                }
            }
        }
        for (int j = 0; j < rrNos.size(); j++)
        {
            int startVal = rrNos[j];
            int tempP = 0;
            bool alloc = false;
            while (tempP < rpeople)
            {
                rrNos[j]++;
                tempP++;
                fraction = modf(((rrNos[j] * hun) / n), &temp);
                if (fraction != 0)
                {
                    int res = static_cast<int>(fraction * 10) % 10;
                    if (res > 4)
                    {
                        rUpNos.push_back(rrNos[j]);
                        result += round((rrNos[j] * hun) / n);
                        result -= round((startVal * hun) / n);
                        rUpNo++;
                        alloc = true;
                        rDoNo--;
                        break;
                    }
                }
            }
            if (alloc)
            {
                rpeople -= tempP;
            }
            if (rpeople <= 0)
            {
                break;
            }
        }

        int inc = 1;
        while (true)
        {
            if (rpeople <= 0)
            {
                break;
            }
            if (inc > rpeople)
            {
                break;
            }
            fraction = modf(((inc * hun) / n), &temp);
            if (fraction != 0)
            {
                int res = static_cast<int>(fraction * 10) % 10;
                if (res > 4)
                {
                    while (rpeople > inc)
                    {
                        result += round((inc * hun) / n);
                        rpeople -= inc;
                    }
                }
            }
            inc++;
        }
        inc = 1;
        while (true)
        {
            if (rpeople <= 0)
            {
                break;
            }
            if (inc > rpeople)
            {
                break;
            }
            fraction = modf(((inc * hun) / n), &temp);
            if (fraction == 0)
            {

                while (rpeople > inc)
                {
                    result += round((inc * hun) / n);
                    rpeople -= inc;
                }
            }
            inc++;
        }
        while (true)
        {
            if (rpeople <= 0)
            {
                break;
            }
            result += round((1 * hun) / n);
            rpeople -= 1;
        }

        cout << "Case #" << i << ": "<<result << endl;
    }
    return 0;
}
