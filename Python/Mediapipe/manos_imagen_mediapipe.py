import cv2
import mediapipe as mp

mp_drawing = mp.solutions.drawing_utils
mp_hands = mp.solutions.hands

with mp_hands.Hands(
    static_image_mode=True,
    max_num_hands=1,
    min_detection_confidence=0.5) as hands:

    image = cv2.imread('mano_mediapipe.jpg')
    height, width, channels = image.shape
    image = cv2.flip(image,1)

    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    results = hands.process(image_rgb)

    #Handedness
    #print("Handedness: ", results.multi_handedness)
    print("Hand landmarks: ", results.multi_hand_landmarks)

    image = cv2.flip(image,1)
cv2.imshow("Image", image)
cv2.waitKey(0)
cv2.destroyAllWindows()
