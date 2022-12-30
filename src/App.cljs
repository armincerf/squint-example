(ns App
  (:require ["react" :as react]
            ["@mui/material/Box$default" :as Box]
            ["@mui/material/Button$default" :as Button]
            ["@mui/material/TextField$default" :as TextField]
            ["@mui/material/Typography$default" :as Typography]))

(def animalsData [{:sound "Moo Moo"
                   :animal "Cow"
                   :language "English"}
                  {:sound "Miau Miau"
                   :animal "Cat"
                   :language "Spanish"}
                  {:sound "Bark Bark"
                   :animal "Dog"
                   :language "German"}])

(def testatom (atom nil))

(defn Game [{:keys [sound animal language]}]
  (let [[guess set-guess] (react/useState "")
        correct? (= animal guess)
        test @testatom]
    (react/useEffect
     (fn []
       (set-guess ""))
     [test])
    #jsx [Box
          [Typography {:variant "h4"} "What animal is this?"]
          [Typography {:variant "h6"} sound]
          [TextField {:label "Animal"
                      :value guess
                      :onChange #(set-guess (-> % :target :value))}]
          (when correct?
            #jsx [Typography {:variant "h4"} "Correct!"])]))

(defn App []
  (let [[animal set-animal] (react/useState (first (shuffle animalsData)))]
    #jsx [Box {:sx {:display "flex"
                    :flexDirection "column"
                    :alignItems "center"
                    :justifyContent "center"}}
          [Box
           {:sx {:display "flex"
                 :flexDirection "column"
                 :gap "1rem"
                 :alignItems "center"
                 :justifyContent "center"
                 :width "100%"}}
           [Typography {:variant "h1"} "Hello, alex"]
           [Game {:& animal}]
           [Button {:variant "contained"
                    :color "primary"
                    :onClick #(do
                                (set-animal (first (shuffle (remove
                                                             (fn [{:keys [sound]}]
                                                               (= sound (:sound animal)))
                                                             animalsData)))))}
            "New Game"]]]))

