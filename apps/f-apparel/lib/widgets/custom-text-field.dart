import 'package:f_apparel/helpers/colors.dart';
import 'package:flutter/material.dart';

class CustomTextField extends StatefulWidget {
  final String hintText;
  final IconData prefixIcon;
  final bool isPassword;
  final FormFieldValidator<String>? validator;
  final FormFieldSetter<String>? onSaved;
  const CustomTextField({
    super.key,
    required this.hintText,
    required this.prefixIcon,
    this.isPassword = false,
    this.validator,
    this.onSaved,
  });

  @override
  CustomTextFieldState createState() => CustomTextFieldState();
}

class CustomTextFieldState extends State<CustomTextField> {
  late FocusNode _focusNode;
  final TextEditingController _controller = TextEditingController();
  String? _errorMessage;

  @override
  void initState() {
    super.initState();
    _focusNode = FocusNode();
    _focusNode.addListener(() {
      setState(() {});
    });
  }

  @override
  void dispose() {
    _focusNode.dispose();
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          decoration: BoxDecoration(
            boxShadow: const [
              BoxShadow(
                color: Color.fromRGBO(166, 44, 44, 0.16),
                blurRadius: 1.0,
                offset: Offset(0, 0),
              ),
              BoxShadow(
                color: Color.fromRGBO(50, 50, 71, 0.05),
                blurRadius: 8.0,
                offset: Offset(0, 3),
              ),
            ],
            borderRadius: BorderRadius.circular(16),
          ),
          child: TextFormField(
            cursorColor: primaryColor,
            controller: _controller,
            obscureText: widget.isPassword,
            focusNode: _focusNode,
            validator: (value) {
              setState(() {
                _errorMessage =
                    widget.validator == null ? null : widget.validator!(value);
              });
              return null;
            },
            onSaved: widget.onSaved,
            decoration: InputDecoration(
              errorStyle: const TextStyle(backgroundColor: Colors.transparent),
              fillColor: Colors.white,
              filled: true,
              hintText: widget.hintText,
              errorBorder: const OutlineInputBorder(
                borderSide: BorderSide(color: errorColor),
                borderRadius: BorderRadius.all(Radius.circular(16.0)),
              ),
              focusedErrorBorder: const OutlineInputBorder(
                borderSide: BorderSide(color: errorColor),
                borderRadius: BorderRadius.all(Radius.circular(16.0)),
              ),
              focusedBorder: const OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(16.0)),
                borderSide: BorderSide(color: primaryColor),
              ),
              enabledBorder: const OutlineInputBorder(
                borderSide: BorderSide(color: Colors.transparent),
                borderRadius: BorderRadius.all(Radius.circular(16.0)),
              ),
              prefixIcon: Icon(
                widget.prefixIcon,
                color: _focusNode.hasFocus ? primaryColor : Colors.grey,
              ),
            ),
          ),
        ),
        Stack(
          children: [
            const SizedBox(height: 23.0),
            if (_errorMessage != null)
              Padding(
                padding: const EdgeInsets.only(left: 12, top: 3),
                child: Text(
                  _errorMessage!,
                  style: const TextStyle(color: errorColor, fontSize: 14),
                ),
              )
          ],
        ),
      ],
    );
  }
}
