// C++ program to find intersection of
// two sorted arrays
#include <bits/stdc++.h>
using namespace std;

/* Function prints Intersection of arr1[] and arr2[] 
m is the number of elements in arr1[] 
n is the number of elements in arr2[] */
int printIntersection(int arr1[], int arr2[], int m, int n)
{
    int i = 0, j = 0,noMatches=0;
    while (i < m && j < n)
    {
        if (arr1[i] < arr2[j])
        {
            i++;
        }
        else if (arr2[j] < arr1[i])
        {
            j++;
        }
        else 
        {
            noMatches++;
            i++;
            j++;
        }
    }
    return noMatches;
}

/* Driver program to test above function */
int main()
{
    int arr1[] = {1, 2, 4, 5, 6, 24, 534, 46, 35, 7,325, 235};
    int arr2[] = {2, 3, 5, 7};

    int m = sizeof(arr1) / sizeof(arr1[0]);
    int n = sizeof(arr2) / sizeof(arr2[0]);
    //  cout << m << " "<<n;
    // Function calling
    sort(arr1,arr1+m);
    int matches=printIntersection(arr1, arr2, m, n);
    cout<<matches;
    return 0;
}
