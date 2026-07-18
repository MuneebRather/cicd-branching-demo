from flask import Flask, jsonify
from datetime import datetime

app = Flask(__name__)

visit_count = 0


@app.route('/api/status')
def status():
    global visit_count
    visit_count += 1
    return jsonify({
        "message": "Backend is alive",
        "server_time": datetime.utcnow().isoformat(),
        "visits": visit_count
    })


@app.route('/health')
def health():
    return jsonify({"status": "ok"}), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
