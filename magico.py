#!/usr/bin/python
# -- coding: utf-8 --
import time, os


def magico_impar(n):
    i = 0
    j = int(int(n)/2)
    contador = 1
    arreglo = [0]*n
 
    for y in range(n):
        arreglo[y] = [0]*n
 
    arreglo[i][j] = 1
    x = (n*n)
 
    while(contador < x):
        for p in arreglo:
            print(p)

        if((i-1)>=0):
            if((j+1)<(n)):
                if(arreglo[i-1][j+1]==0):
                    i -= 1
                    j += 1
                    contador += 1
                    arreglo[i][j] = contador
                else:
                    i += 1
                    contador += 1
                    arreglo[i][j] = contador
            else:
                if(arreglo[i-1][0]==0):
                    i -= 1
                    j = 0
                    contador += 1
                    arreglo[i][j] = contador
                else:
                    i += 1
                    contador += 1
                    arreglo[i][j] = contador
        else:
            if(((j+1)<(n))):
                if (arreglo[n-1][j+1]==0):
                    i = n-1
                    j += 1
                    contador += 1
                    arreglo[i][j] = contador
                else:
                    i += 1
                    contador += 1
                    arreglo[i][j] = contador
            else:
                i += 1
                contador += 1
                arreglo[i][j] = contador

        time.sleep(1)    
        os.system("clear")  
    for p in arreglo:
         print(p)
   

if __name__ == "__main__":
   tamaño = int(input('Dimension del cuadro: ')) 
   os.system("clear")  
   time.sleep(1) 
   magico_impar(tamaño)