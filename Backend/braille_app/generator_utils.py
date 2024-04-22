# app_name/generator_utils.py
# from pathlib import Path
# import hashlib
# import google.generativeai as genai

# Configure your AI model
# genai.configure(api_key="AIzaSyCjhhJeQrHy-TrRJnQCAV2QXfgBOVSG_v8")

# Set up the model with specific configurations
# generation_config = {
#     "temperature": 1,
#     "top_p": 0.95,
#     "top_k": 0,
#     "max_output_tokens": 8192,
# }

# safety_settings = [
#     {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
#     {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
#     {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
#     {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
# ]

# model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest",
#                               generation_config=generation_config,
#                               safety_settings=safety_settings)

# def upload_if_needed(pathname: str) -> list[str]:
#     path = Path(pathname)
#     hash_id = hashlib.sha256(path.read_bytes()).hexdigest()
#     try:
#         existing_file = genai.get_file(name=hash_id)
#         return [existing_file]
#     except:
#         pass
#     uploaded_files = []
#     uploaded_files.append(genai.upload_file(path=path, display_name=hash_id))
#     return [uploaded_files[-1]]

# def generate_content(prompt_parts):
#     response = model.generate_content(prompt_parts)
#     return response.text

# def cleanup_files(uploaded_files):
#     for uploaded_file in uploaded_files:
#         genai.delete_file(name=uploaded_file.name)
