import pickle
import pandas as pd
import io
import torch 
import onnx
from onnx2pytorch import ConvertModel


onnx_model = onnx.load("data.onnx")
model = ConvertModel(onnx_model)
model.predict()



