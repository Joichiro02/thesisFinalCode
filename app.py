import pyautogui
import serial
import time
from pynput.keyboard import Key, Controller

keyboard = Controller()
serialcomm = serial.Serial('COM14',9600, timeout = 1)

def display():
    while True: 
        value = serialcomm.readline().decode('ascii')
        if(len(value) >= 27):
            pyautogui.typewrite(value.strip())
            keyboard.press(Key.enter)
            keyboard.release(Key.enter)

display()


